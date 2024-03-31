const getCheckboxInputProps = (label) => ({ 'aria-label': label });

export default function getOptionProps(item, filterState, toggleCheckbox) {
  const label = item?.name ?? item;
  const ariaProp = getCheckboxInputProps(label);

  const link = typeof item?.link === 'string' ? item.link : item;
  const handleCheckboxToggle = () => toggleCheckbox(filterState, link);

  return { label, ariaProp, link, handleCheckboxToggle };
}
