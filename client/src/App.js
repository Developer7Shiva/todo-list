
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Todo/>}></Route>
          {/* <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/" element={<MiniForm/>}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/checkbox" element={<Checkbox />}></Route>
          <Route path="/txtinput" element={<TextInput />}></Route>
          <Route path="/miniform" element={<MiniForm />}></Route>
          <Route path="/fetchdata" element={<FetchData/>}></Route> 
          <Route path="/calc" element={<CalcMain/>}> </Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}