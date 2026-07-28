import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";
import { fields } from "../data/records";
export default function RecordForm({ type, notify }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const title = type === "asset" ? "Asset" : "Student";
  const change = (name, value) => setValues({ ...values, [name]: value });
  const submit = (e) => {
    e.preventDefault();
    const invalid = fields[type]
      .filter((f) => f.required && !values[f.name])
      .reduce((all, f) => ({ ...all, [f.name]: "This field is required" }), {});
    setErrors(invalid);
    if (Object.keys(invalid).length) return;
    notify({
      title: `${title} saved successfully`,
      text: "Your new record is ready to use.",
    });
    navigate(`/${type}s`);
  };
  return (
    <>
      <PageHeader
        eyebrow="CREATE RECORD"
        title={`Add ${title}`}
        description={`Create a new ${type} record for your inventory.`}
      />
      <form className="panel form-card" onSubmit={submit}>
        <div className="form-heading">
          <div className="form-icon">
            <Icon name={type === "asset" ? "assets" : "students"} size={21} />
          </div>
          <div>
            <h3>{title} details</h3>
            <p>Fields marked with * are required.</p>
          </div>
        </div>
        <div className="form-grid">
          {fields[type].map((field) => (
            <label
              key={field.name}
              className={field.type === "textarea" ? "form-wide" : ""}
            >
              {field.label}
              {field.required && " *"}
              {field.type === "select" ? (
                <select
                  value={values[field.name] || ""}
                  onChange={(e) => change(field.name, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  rows="4"
                  value={values[field.name] || ""}
                  placeholder={field.placeholder}
                  onChange={(e) => change(field.name, e.target.value)}
                />
              ) : (
                <input
                  value={values[field.name] || ""}
                  placeholder={field.placeholder}
                  onChange={(e) => change(field.name, e.target.value)}
                />
              )}{" "}
              {errors[field.name] && (
                <small className="field-error">{errors[field.name]}</small>
              )}
            </label>
          ))}
        </div>
        <div className="form-actions">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit">Save {title}</Button>
        </div>
      </form>
    </>
  );
}
