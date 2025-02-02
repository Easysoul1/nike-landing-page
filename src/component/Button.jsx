
const Button = ({ label, iconURL }) => {
  return (
    <button className="relative overflow-hidden flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red group">
      <span className="absolute inset-0 bg-gradient-to-r from-black via-coral-red to-coral-red transition-all duration-300 ease-in-out group-hover:from-coral-red group-hover:to-black"></span>
      <span className="relative z-10">{label}</span>
      {iconURL && <img src={iconURL} alt="Arrow right icon" className="ml-2 rounded-full w-5 h-5 relative z-10" />}
    </button>
  );
};

export default Button;
