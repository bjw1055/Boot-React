import jwtAxios from "../../util/jwtUtil";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import ReadComponent from "../../components/products/readComponent";

export async function loadProduct({params}: LoaderFunctionArgs) {

  const {pno} = params

  const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)

  return res.data
}

function ReadPage() {

  const product:ProductDTO = useLoaderData()

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
        Products Read Page
      </div>

      <ReadComponent product={product}/>
    </div>
  )
}

export default ReadPage