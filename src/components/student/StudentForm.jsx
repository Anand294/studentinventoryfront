import Icon from "../Icon";
import PageHeader from "../PageHeader";

export default function StudentForm() {
  return (
    <>
      <PageHeader
        eyebrow="CREATE RECORD"
        title={"Add Student"}
        description={"Create a new Student Record."}
      />
      <form className="panel form-card">
        <div className="form-heading">
          <div className="form-icon">
            <Icon name={"students"} size={21} />
          </div>
          <div>
            <h3>Student Details</h3>
            <p>Fields marked with * are mandatory.</p>
          </div>
        </div>
      </form>
    </>
  );
}
