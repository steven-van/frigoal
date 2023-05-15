import ProfileImg from "../assets/images/png/OK.jpg";

const Profile = ({ firstName, lastName, email, password }) => {
  const inputItems = [
    { label: "First Name", value: firstName },
    { label: "Last Name", value: lastName },
    { label: "Email", value: email },
    { label: "Password", value: password },
  ];

  return (
    <div className="grid place-items-center pt-8">
      <div className="text-center">
        <img className="h-48 w-48 rounded-full" src={ProfileImg} alt="Profile img" />
        <p className="text-xl font-bold">Mohamad RESLAN</p>
      </div>
      <div className="mt-16">
        <div className="">
          <p className="text-xl font-bold">Profile</p>
          <p className="text-xs ">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="grid grid-cols-2">
          {inputItems.map((item) => (
            <div className="mt-4">
              <div>{item.label}</div>
              <input
                className="border-2 border-black-900"
                type="text"
                value={item.value}
                id="name"
                name="name"
                required
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
