export default function CommingSoon() {
  return (
    <div className="container-fluid">
      <div className="row clearfix d-flex justify-content-center">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <div className="card">
            <div className="p-4 d-flex justify-content-center">
              <b style={TextStyle}>Feature in development. Coming soon!</b>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <img src="/assets/images/Pingu.png" alt="" height={"150"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TextStyle = {
  "font-size": "x-large",
  "font-weight": "500",
  "letter-spacing": "2px",
};
