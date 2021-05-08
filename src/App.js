import React from "react";
import "./style.css";

function App() {
  return (
    <div>
      <header>
        我是头部
        <Nav container="我是导航列表容器" />
      </header>
      <main>
        我是身体
        <MainBody themeColor="pink" />
      </main>
      <footer>我是脚</footer>
    </div>
  );
}

const Nav = (props) => {
  return (
    <ul>
      {props.container}
      <li>我是导航一</li>
      <li>我是导航二</li>
      <li>我是导航三</li>
    </ul>
  );
};

class MainBody extends React.Component {
  render() {
    return (
      <div className="main_body">
        <div className={this.props.themeColor}>left</div>
        <div className="red">main</div>
        <div className="green">right</div>
      </div>
    );
  }
}

export default App;
