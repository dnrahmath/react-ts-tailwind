import * as React from "react";
import { Link } from "react-router-dom"; 

// 1- export interfaces props
// 2- export interfaces state
// 3- pasword validation
// 4- component ditampilkan untuk email lalu password
// 5- url query dari react-router-dom v6
// 6- tailwinds login signup


type Props = {
  textPropPass: string
};

type State = {
  email: string,
  password: string,
  loading: boolean,
  message: string,
  tkn: string,
  hello: string
};

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
      tkn: "123456",
      hello: ""
    };
  }

  // Fungsi buatan -----------------------------------------------------
  changeState() {  //halaman di perbarui statenya
    this.setState({ hello: "Geek!" });
  }
  // -------------------------------------------------------------------



  componentWillMount() {  //ketika laman akan di muat kembali maka akan di muat 1 [hanya 1 kali diawal terjadi]
    console.log("componentWillMount()");
  }

  componentDidMount() {  //ketika laman akan di muat kembali maka akan di muat 2
    console.log("componentDidMount()");
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      email: "",
      password: "",
    };

    return (
      <div className="col-md-12">
        <div className="justify-center items-center bg-blue-200">
          <h1>ini adalah input props Kedua = {this.props.textPropPass}</h1>
        </div>
      </div>
    );
  }

  componentWillUpdate() {  //bila terjadi action pada element maka akan menjalankan update 3
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {  //bila terjadi action pada element maka akan menjalankan update 4
    console.log("componentDidUpdate()");
  }


}