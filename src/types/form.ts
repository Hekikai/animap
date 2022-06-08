export interface Form<T> {
    username: T,
    password: T,
    email?: T,
}

export type Login =  Omit<Form<string>, "email">;
export type Registration = Form<string>;
export type ValidatedFields = Form<boolean>;