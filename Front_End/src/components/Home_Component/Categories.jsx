import { NavLink } from "react-router-dom";
import category from "../Home_Component/categories"
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material"

const Categories = () => {
  return(
    <>

    <NavLink to={"/create"}>
      <Button
        sx={{
          m: "20px",
          bgcolor: "black",
          width: "85%",
          color: "white",
          "&:hover": {
            bgcolor: "grey",
          },
        }}
      >
        CREATE BLOG
      </Button>
    </NavLink>


    <Table className="border-2 border-stone-300">
        <TableHead>
            <TableRow>
                <TableCell>
                    All Categories
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
            {
            category.map(cate => (
                <TableRow key={cate.id} >
                    <TableCell>
                        {cate.type}
                    </TableCell>
                </TableRow>
            ))
            }
        </TableBody>
    </Table>

    </>
  )
}

export default Categories;