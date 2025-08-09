const Breadcrumb = ({ page }) => (
  <div className="text-sm text-gray-600 p-4">
    Home {page !== 'Dashboard' && `/ ${page}`}
  </div>
);

export default Breadcrumb;