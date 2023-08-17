module.exports = {
  parseUsers: (users) => {
    return users.map((user) => ({
      id: user._id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      avatar: user.avatar,
      phone: user.phone,
      is_verified: user.isVerified,
      created_at: user.createdAt,
    }));
  },
};
