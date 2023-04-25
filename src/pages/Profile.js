const Profile = ({ firstName, lastName, email, password }) => {
  const inputItems = [firstName, lastName, email, password];

  return (
    <div className="bg-red-100 w-full h-10">
      <div className="flex-au">
        {inputItems.map((item) => (
          <div className="bg-red-100 w-full h-10">
            <input type="text" value={item} id="name" name="name" required />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
