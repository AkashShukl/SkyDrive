import { Alert } from "react-bootstrap";
import { database, storage } from "../../firebase";

export const deleteFile = (file) => {
  console.log("deleting initiated ...");
  console.log(file);
  var fileRef = storage.refFromURL(file.url);
  fileRef
    .delete()
    .then(function () {
      // File deleted successfully
      //console.log("File Deleted");
    })
    .catch(function (error) {
      Alert("Error occurd while deleteing", error);
    });
  database.files
    .where("url", "==", file.url)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref
          .delete()
          .then(() => {
            //console.log("ref gone from db and file deleted from storage");
          })
          .catch((error) => {
            Alert("Error occurd while deleteing", error);
          });
      });
    })
    .catch((error) => {
        Alert("Error occurd while deleteing", error);
    });
};
