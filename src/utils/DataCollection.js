// import db from './db';

// export default class DataCollection {
//     static list() {
//         return new Promise(async resolve => {
//             let data = [];
//             let querySnapshot = await db.collection("data").get();

//             querySnapshot.forEach(doc => {
//                 let item = {
//                     id: doc.id,
//                     ...doc.data()
//                 }
//                 data.push(item);
//             });
//             resolve(data);
//         });
//     };

//     static insert(newObject) {
//         return db.collection("data").add(newObject);
//     };

//     static update(id, newObject) {
        
//     };

//     static delete(id) {

//     };
// };
