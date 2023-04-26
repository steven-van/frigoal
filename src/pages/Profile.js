const Profile = ({ firstName, lastName, email, password }) => {
  const inputItems = [firstName, lastName, email, password];

  return (
    <div className="grid grid-cols-2 gap-2">
      {inputItems.map((item) => (
        <div>
          <input
            className="border-2 border-black-900 m-2"
            type="text"
            value={item}
            id="name"
            name="name"
            required
          />
        </div>
      ))}
    </div>
  );
};

export default Profile;
