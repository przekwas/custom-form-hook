import React from 'react';
import useForm from '../utils/useForm';

const Home = () => {

    //our callback for handleSubmit
    const login = () => {
        console.log(values);
    }

    //custom hook returns an object with these three properties
    //values is an object with a key for each input we need
    //handleChange is your univeral onChange handler
    //handleSubmit is whatever you want as your callback, it just preventsDefault on form refresh
    const { values, handleChange, handleSubmit } = useForm(login);

    return (
        <section className="row my-5">
            <article className="col-md-6 offset-md-3">
            <h1 className="text-center my-5">With Custom Hook</h1>

                <form
                    onSubmit={handleSubmit}
                    className="form-group border border-dark rounded p-3 shadow-lg">
                    <label>Email Address</label>
                    <input
                        //we need to do the || '' trick to make sure we have a controlled input
                        //initial value of the values object is that .. an object and not a string
                        //so react will throw warnings even if it works
                        value={values.email || ''}
                        onChange={handleChange}
                        className="form-control p-1 my-1 shadow-sm"
                        name="email"
                        placeholder="fox@mccloud.com"
                        type="email"
                        required />
                    <label>Password</label>
                    <input
                        value={values.password || ''}
                        onChange={handleChange}
                        className="form-control p-1 my-1 shadow-sm"
                        name="password"
                        placeholder="multishine20xx"
                        type="password"
                        required />
                    <button className="btn btn-primary btn-block mt-3 mb-1 shadow">Login</button>
                </form>
            </article>
        </section>
    );
}

export default Home;