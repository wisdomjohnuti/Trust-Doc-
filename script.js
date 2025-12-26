<h2>Sign Up / Login</h2>
‎<input type="email" id="email" placeholder="Email" />
‎<input type="password" id="password" placeholder="Password" />
‎<button onclick="signup()">Sign Up</button>
‎<button onclick="login()">Login</button>
‎
‎<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
‎<script>
‎  const supabaseUrl = 'https://pwkiugluqeppvlipqutd.supabase.co';
‎  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3a2l1Z2x1cWVwcHZsaXBxdXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3Njg4NjIsImV4cCI6MjA4MjM0NDg2Mn0.LnuI6TOLMDxWXXr6HsGh5QQ1dOKdZyo5m8qGJ1fVejU';
‎  const supabase = supabase.createClient(supabaseUrl, supabaseKey);
‎
‎  async function signup() {
‎    const email = document.getElementById('email').value;
‎    const password = document.getElementById('password').value;
‎    const { data, error } = await supabase.auth.signUp({ email, password });
‎    if(error) alert(error.message);
‎    else alert('Signup successful! Check your email to confirm.');
‎  }
‎
‎  async function login() {
‎    const email = document.getElementById('email').value;
‎    const password = document.getElementById('password').value;
‎    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
‎    if(error) alert(error.message);
‎    else alert('Login successful!');
‎  }
‎</script>
‎
