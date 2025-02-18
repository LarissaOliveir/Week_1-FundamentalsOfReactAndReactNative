import { FlatList, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Tasks({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={[styles.taskCard, { borderLeftColor: item.status }]}>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitleText}>{item.title}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
          </View>

          <View style={styles.taskActions}>
            <View style={styles.iconsRow}>
              <IconButton icon="pencil" size={18} iconColor={item.status} />
              <IconButton icon="delete" size={18} iconColor={item.status} />
              <IconButton icon="eye" size={18} iconColor={item.status} />
            </View>

            <View
              style={[
                styles.dateBadge,
                { backgroundColor: item.status + "40" },
              ]}
            >
              <Text style={[styles.dateText, { color: item.status }]}>
                {item.date}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskCard: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderLeftWidth: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskContent: {
    flex: 1,
  },
  taskTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
    color: "#7a7a7a",
  },
  taskActions: {
    alignItems: "flex-end",
  },
  iconsRow: {
    flexDirection: "row",
  },
  dateBadge: {
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
