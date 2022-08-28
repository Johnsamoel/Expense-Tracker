import { FlatList } from "react-native";

const VirtualizedView = ({children}) => {
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex:1 }}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{children}</>
      )}
    />
    );
};

export default VirtualizedView;