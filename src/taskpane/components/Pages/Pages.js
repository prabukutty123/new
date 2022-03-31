import React from "react";
import UserContainer from "../UserContainer";
const Pages = () => {
  const Paragraph1 =
    "Finally, we reach the Search component, this is the most important component from the perspective of the article. Firstly, we import useState from react . Then, we import the Scroll and SearchListcomponents. Next, in the Search function, we use the useState hook to initialise the value of the searchField state with useState() (an empty string). After this, we use the filter function on the details list received from the parent";
  const dispatch = useDispatch();
  // Logout
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "LOGOUT" });
    console.log();
  }
  const value = useSelector((state) => state.auth);
  // Contentcontrol
  const insert = async () => {
    return Word.run(async (context) => {
      const paragraph = context.document.body.insertParagraph(Paragraph1, Word.InsertLocation.start);
      paragraph.font.color = "red";
      const Contentcontrol1 = paragraph.insertContentControl();
      Contentcontrol1.title = "one";
      await context.sync();
    });
  };

  // Search and replace
  const ReplaceText = async () => {
    return Word.run(async (context) => {
      const search = context.document.body.search("as");
      search.load();

      await context.sync();
      console.log(search);
      await context.sync();

      search.items.map((item) => {
        item.insertText("Prabu", Word.InsertLocation.replace);
        console.log(item);
      });
    });
  };

  return (
    <div>
      <div>
        {value ? (
          <div>
            <button onClick={insert}>Insert Paragraph</button>
            <button onClick={ReplaceText}>ReplaceText</button>
            <button onClick={handleSubmit}>LOGOUT</button>
          </div>
        ) : (
          <UserContainer />
        )}
      </div>
    </div>
  );
};
export default Pages;
