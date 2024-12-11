import category from "../Home_Component/categories"
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"

const Categories = () => {
  return(
    <>

    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    All Categories
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            category.map(cate => (
                <TableRow key={cate.id}>
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