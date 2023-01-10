import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../RegisterForm/Index.module.css'

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data))
        document.write(JSON.stringify(data))
    };
    return (
        <>
            <div className={styles.registerform}>
                <h3 className={styles.formheading}>Please fill in this form to create an account.</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name : </label>
                    <input className={styles.inputfield} {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i,
                    })} />
                    {errors?.firstName?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}

                    {errors?.firstName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}<br />

                    <label>Last Name : </label>
                    <input className={styles.inputfield} {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors?.lastName?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}
                    {errors?.lastName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}<br />

                    <label>Age : </label>
                    <input className={styles.inputfield} {...register("age", {required: true, min: 18, max: 99 })} />
                    {errors?.age?.type === "required" && <p className={styles.requiredpara} >This field is required *</p>}
                    {/* {errors.age && (
                        <p>You Must be older then 18 and younger then 99 years old</p>
                    )} */}
                    <br />

                    <label>Gender : </label>
                    <select className={styles.inputfield} {...register("gender", { required: true })}>
                        <option value="">Select Gender...</option>
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                    {errors?.gender?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}
                    <br />

                    <label>Phone : </label>
                    <input className={styles.inputfield} {...register("phone", { required: true })} />
                    {errors?.phone?.type === "required" && <p className={styles.requiredpara} >This field is required *</p>}

                    <label>Email : </label>
                    <input className={styles.inputfield} {...register("email", { required: true, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    {errors?.email?.type === "required" && <p className={styles.requiredpara}>This field is required *</p>}

                    <div className={styles.submit}>
                    <input className={styles.submit} type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;