import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import topics from "@/data/router-test";

function Home() {
  return <h1>Home</h1>;
}

function Topics({ match }) {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => {
          return (
            <ul key={id}>
              <li>
                <Link to={`${match.url}/${id}`}>{name}</Link>
              </li>
            </ul>
          );
        })}
        <Route path={`${match.path}/:topicId`} component={Topic} />
      </ul>
    </div>
  );
}

function Topic({ match }) {

    console.log(match)
  const topic = topics.find(({ id }) => id === match.params.topicId);
  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <ul>{topic.resources.map(({ name, id, description, url }) => {
          return (
            <li key={id}><Link to={ `${match.url}/${id}` }>{ name }</Link></li>
          )
      })}</ul>
      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
}

function Resource({ match }) {
    console.log(match)
    const resource = topics.find(({id}) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId)

    console.log(match)
    return (
        <div>

        <h4>{resource.name}</h4>
        <p>{resource.description}</p>
        </div>
    )
}



export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto", backgroundColor: "pink" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}
