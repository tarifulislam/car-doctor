import { Link } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/")
            })
            .then(err => console.log(err))
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
                            <h1 className="text-2xl font-bold text-center"> Create Accound</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <span>Already Have a accound-  <span className=" text-red-500 font-semibold"><Link to="/signIn">Login</Link></span> </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;