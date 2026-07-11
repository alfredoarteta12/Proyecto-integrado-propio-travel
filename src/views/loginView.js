export function LoginView() {

    return `

        <section class="login-container">

            <h2>Login</h2>

            <form id="loginForm">

                <input
                    type="email"
                    placeholder="Email"
                    required
                >

                <input
                    type="password"
                    placeholder="Password"
                    required
                >

                <button type="submit">

                    Sign In

                </button>

            </form>

        </section>

    `;

}