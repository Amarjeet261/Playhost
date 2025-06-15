export interface LoginFormData {
  title: string;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  rememberMeLabel: string;
  signInButton: string;
  orLoginWith: string;
  googleLabel: string;
  facebookLabel: string;
}


export const loginFormData: LoginFormData = {
  title: "Sign in to your account",
  usernamePlaceholder: "Username or email",
  passwordPlaceholder: "Password",
  rememberMeLabel: "Remember me",
  signInButton: "Sign In",
  orLoginWith: "Or login up with",
  googleLabel: "Google",
  facebookLabel: "Facebook"
};
