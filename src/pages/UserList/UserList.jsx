import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserList = () => {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListUserImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="userListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
