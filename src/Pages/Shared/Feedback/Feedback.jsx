
const Feedback = ({ handleFeedbackModal }) => {
  return (
    <div className="w-full h-screen grid place-content-center fixed z-40 bg-slate-900/80">
      <div className="">
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered w-full textarea-lg"
        ></textarea>
        <button
          className="btn btn-secondary w-full"
          onClick={handleFeedbackModal}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Feedback