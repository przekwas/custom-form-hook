import React from 'react';
import useForm from '../utils/useForm';

const Home = () => {

    const login = () => {
        console.log(values);
    }

    const { values, handleChange, handleSubmit } = useForm(login);

    return (
        <section className="row my-5">
            <article className="col-md-6 offset-md-3">
                <form
                    onSubmit={handleSubmit}
                    className="form-group border border-dark rounded p-3 shadow-lg">
                    <label>Email Address</label>
                    <input
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