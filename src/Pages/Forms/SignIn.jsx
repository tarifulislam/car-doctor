import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = {email}
                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
               .then(res => {
                   console.log(res.data);
                   if(res.data.success) {
                    navigate(location?.state ? location?.state : "/")
                   }
                })

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="hero bg-base-200 py-24">
                <div className="hero-content flex gap-14">
                    <div className="text-center lg:text-left">

                        <img src={img1} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-2xl font-bold text-center"> Login Accound</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <span>New here create accound-  <span className=" text-red-500 font-semibold"><Link to="/signUp">SignIn</Link></span> </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;