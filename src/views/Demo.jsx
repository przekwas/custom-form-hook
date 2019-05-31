import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

const Demo = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ email, password });
    }

    return (
        <section className="row my-5">
            <article className="col-md-6 offset-md-3">
                <h1 className="text-center my-5">No Custom Hook</h1>
                <form
                    onSubmit={e => handleSubmit(e)}
                    className="border border-dark rounded p-3 shadow-lg">
                    <CustomInput
                        value={email}
                        setValue={setEmail}
                        label="Email"
                        type="email"
                        placeholder="falco@lombardi.com"
                        required
                    />
                    <CustomInput
                        value={password}
                        setValue={setPassword}
                        label="Password"
                        type="password"
                        placeholder="shorthoplaser"
                        required
                    />
                    <button className="btn btn-primary btn-block shadow">Login</button>
                </form>
            </article>
        </section>
    );
}

export default Demo;