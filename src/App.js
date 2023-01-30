import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import userProfile from "./components/UserProfile"

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header></Header>
      {!isAuth&&<Auth></Auth>}
      {isAuth&&<userProfile/>}
      <Counter />
    </>
  );
}

export default App;
