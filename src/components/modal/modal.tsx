import { ReactElement, ReactNode } from "react";

export interface Props {
  setIsEditProfileVisible: Function;
  resume: any;
  updateResumeFunction: Function;
  Form: React.ElementType;
}

const ShowEditProfileModal = (props: Props) => {
  const InnerForm = props.Form;
  return (
    <div className="" onClick={() => props.setIsEditProfileVisible(false)}>
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
        <div className="relative w-11/12 max-w-3xl mx-auto my-6">
          <InnerForm
            resume={props.resume}
            updateResumeFunction={props.updateResumeFunction}
          ></InnerForm>
        </div>
      </div>
    </div>
  );
};

export default ShowEditProfileModal;
