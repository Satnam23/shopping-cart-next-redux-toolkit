import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../SignUp/Index.module.css'
import Link from 'next/link';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data))
        document.write(JSON.stringify(data))
    };
    return (
        <>
            <div className={styles.registerform}>
                <h3 className={styles.formheading}>Login Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Email : </label>
                    <input className={styles.inputfield} {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} />
                    {errors?.email?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}

                    <label>Password : </label>
                    <input className={styles.inputfield} type="password" {...register("password", {
                        required: true,
                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                        minLength: 8,
                        
                    })} />
                    {errors?.password?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}

                    <div className={styles.submit}>
                        <input className={styles.submit} type="submit" value={"Login"} />
                    </div><br />

                    <div>
                        <Link href={"/"}>Forget Password</Link>/
                        <Link href={"/register"}>New User</Link>
                    </div><br />

                    <div className={styles.sociallinks}>
                        <b className={styles.signupwith}>Sign up With</b><br />
                        <EmailShareButton
                            url={'https://github.com/next-share'}
                            subject={'Next Share'}
                            body="body"
                        >
                            <EmailIcon className={styles.slinks}size={62} round />
                        </EmailShareButton>
                        <LinkedinShareButton url={'https://github.com/next-share'}>
                            <LinkedinIcon className={styles.slinks} size={62} round />
                        </LinkedinShareButton>
                        <FacebookShareButton
                            url={'https://github.com/next-share'}
                            quote={'next-share is a social share buttons for your next React apps.'}
                            hashtag={'#nextshare'}
                        >
                            <FacebookIcon className={styles.slinks} size={62} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={'https://github.com/next-share'}
                            title={'next-share is a social share buttons for your next React apps.'}
                        >
                            <TwitterIcon className={styles.slinks} size={62} round />
                        </TwitterShareButton>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;