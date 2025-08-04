import User from '../models/user.model.js';
import gender from 'gender-detection';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const detectedGender = gender.detect(username);

    if (detectedGender === 'male') {
      return res.status(200).json({
        gender: detectedGender,
        message: `Hi ${username}, even though you're a male, your interest in exploring a women's safety platform shows great empathy and awareness. We truly appreciate your support in empowering the women around you.`,
        username,
      });
    }

    return res.status(200).json({ message: 'Signup successful', username });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);  // <-- ADD THIS
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'No account found with this email. Please sign up first.' });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password.' });
    }

    const detectedGender = gender.detect(existingUser.username); // using gender-detection package

    if (detectedGender === 'male') {
      return res.status(200).json({
        gender: detectedGender,
        message: `Hi ${existingUser.username}, even though you're a male, your interest in exploring a women's safety platform shows great empathy and awareness. We truly appreciate your support in empowering the women around you.`,
        username: existingUser.username
      });
    }

    return res.status(200).json({
      message: 'Login successful',
      username: existingUser.username
    });

  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
