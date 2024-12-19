import { Link, NavLink, useSearchParams } from "react-router-dom";
import category from "../Home_Component/categories"
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material"

const Categories = () => {
  
  const [searchParams] = useSearchParams();
  const categories = searchParams.get('category');
  
  return(
    <>
    <NavLink to={`/create?category=${categories || ""}`}>
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
                  <Link to={"/home"}>
                    All Categories
                  </Link>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
            {
            category.map(cate => (
                <TableRow key={cate.id} >
                    <TableCell>
                      <Link to={`/home?category=${cate.type}`}>
                        {cate.type}
                      </Link>
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
