import { Form } from "antd";

export function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">
      <Form >
        
      </Form>
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}