import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [tab, setTab] = useState('List');

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('List')}>リスト</li>
          <li onClick={() => setTab('Form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'List' ? <List /> : <Form />
      }
    </div>
  );
}

export default App;
  