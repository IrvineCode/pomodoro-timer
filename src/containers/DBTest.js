// import React from 'react';

// import IndexedDB from '../utils/IndexedDB';

// export default class DBTest extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             list: []
//         };

//         let db = new IndexedDB();
//         db.list(customers => {
//             this.setState({list: customers})
//         });
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.list.map(entry => (
//                     <div>{entry.name}</div>
//                 ))}
//             </div>
//         );
//     };
// };
