import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/Languages";

function App() {
  const [tab, setTab] = useState('List');
  const [langs, setLangs] = useState(LANGUAGES)

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('List');
  }

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
        tab === 'List' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;
  