export default function ProductList({
  isLoading, hasError, ...otherProps
}) {
  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    return <Error />;
  }
  return // standard output when data present
}