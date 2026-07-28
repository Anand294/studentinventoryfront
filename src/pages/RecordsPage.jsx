import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Modal from "../components/Modal";
import { assetRecords, studentRecords } from "../data/records";
import { AssetTable } from "./Dashboard";
export default function RecordsPage({ type, notify }) {
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const plural = type === "asset" ? "Assets" : "Students";
  const records = type === "asset" ? assetRecords : studentRecords;
  const filtered = useMemo(
    () =>
      records.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.id.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, records],
  );
  return (
    <>
      <PageHeader
        eyebrow="MANAGEMENT"
        title={`${plural} list`}
        description={`Manage every ${type} in your workspace.`}
        action={
          <Button
            icon="plus"
            onClick={() => navigate(`/${plural.toLowerCase()}/new`)}
          >
            Add {type}
          </Button>
        }
      />
      <section className="panel list-panel">
        <div className="list-controls">
          <label className="field-search">
            <Icon name="search" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${plural.toLowerCase()}...`}
            />
          </label>
          <div>
            <Button
              variant="secondary"
              icon="filter"
              onClick={() => setModal(true)}
            >
              Filters
            </Button>{" "}
            <Button
              variant="secondary"
              icon="download"
              onClick={() =>
                notify({
                  title: "Export started",
                  text: `Your ${plural.toLowerCase()} export will be ready shortly.`,
                })
              }
            >
              Export
            </Button>
          </div>
        </div>
        {filtered.length ? (
          <AssetTable records={filtered} />
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <Icon name={type === "asset" ? "assets" : "students"} />
            </div>
            <h3>No matching {plural.toLowerCase()}</h3>
            <p>Try another search term or add a new record.</p>
          </div>
        )}
      </section>
      {modal && (
        <Modal title="Filter records" onClose={() => setModal(false)}>
          <p className="modal-copy">
            More filters can be connected to your backend when records are
            available.
          </p>
          <Button onClick={() => setModal(false)}>Apply filters</Button>
        </Modal>
      )}
    </>
  );
}
