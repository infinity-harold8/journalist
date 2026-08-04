import { useSelector, useDispatch } from "react-redux";

const ReportPage = () => {
  const auth = useSelector((slicer) => slicer.auth);
  console.log(auth.user._id);
  return (
    <div>
      ReportPagttsetetest
      {auth.user.user_name}
    </div>
  );
};

export default ReportPage;
