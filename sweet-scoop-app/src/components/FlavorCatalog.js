import flavors from "../data/flavors.js";
import FlavorItem from "./FlavorItem.js";

function FlavorCatalog({onAdd}) {
  return (
    <div className = "flavor-grid">
      {flavors.map((flavor) => (
        <FlavorItem
          key = {flavor.id}
          image = {flavor.image}
          name = {flavor.name}
          price = {flavor.price}
          desc = {flavor.description}
          duration = {flavor.duration}
          onAdd = {() => onAdd(flavor)}
        />
      ))}
    </div>
  );
}

export default FlavorCatalog;