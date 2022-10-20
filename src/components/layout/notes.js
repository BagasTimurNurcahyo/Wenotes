// Importing Custom Modules
import ShowNotes from "../ui/showNotes";
import TakeNotes from "../ui/takeNotes";
import Footer from "../footer";

const Notes = () => {
  return (
    <>
      <main>
        <TakeNotes />
        <ShowNotes />
      </main>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Notes;
