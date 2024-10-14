
import img1 from "../../../assets/images/about_us/person.jpg"
import img2 from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className=" container mx-auto py-9">

            <div className="flex gap-6">
                <div className="w-1/2">
                    <div className="w-full relative">
                        <img className="w-10/12" src={img1} alt="Person" />
                        <div className="w-4/12 absolute right-4  -bottom-7">
                            <img className=" w-full p-1  h-32 bg-slate-400" src={img2} alt="Person" />
                        </div>
                    </div>
                </div>

                <div className="w-1/2 pr-[5%] space-y-4">
                    <p className=" text-red-500 font-bold">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified  <br />& of experience <br />in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className=" btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;