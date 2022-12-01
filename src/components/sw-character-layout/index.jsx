import { useContext } from "react";

import { DefaultContext } from "../../Contexts";

export const CharacterLayout = ({ item, children }) => {
  const {}  = useContext(DefaultContext);
  return (
    <div key={item.name} className="item-list-layout">
      <div>{children}</div>
      <div className="item-image-layout">
        <img className="item-image" src={item.url} alt={item.name} />
      </div>
    </div>
  );
};
