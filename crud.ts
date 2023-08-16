import axios from "axios";

class CURD {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:9200/data/collections/";
  }

  async createIndex() {
    try {
      const response = await axios.put(
        this.baseUrl + "1",
        {
          message: "Hello, People!",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async addRecords(recordNumber: number) {
    try {
      const response = await axios.post(
        this.baseUrl + recordNumber,
        {
          message: "New Record with Number " + recordNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteRecords(recordNumber: number) {
    try {
      const response = await axios.delete(this.baseUrl + recordNumber, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Record deleted:", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateRecords(recordNumber: number) {
    try {
      const response = await axios.put(
        this.baseUrl + recordNumber,
        {
          message: "Updated Record with Number " + recordNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Record updated:", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async getOneCollection(recordNumber: number) {
    try {
      const response = await axios.get(
        this.baseUrl + recordNumber,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Record:", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    try {
      const response = await axios.get(this.baseUrl + "_search" , {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("All records:", response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

const crud = new CURD();
// crud.createIndex();
// crud.addRecords(4); // Change the record number as needed
//crud.getOneCollection(1); // Change the record number as needed
// crud.updateRecords(2); // Change the record number as needed
//crud.deleteRecords(2); // Change the record number as needed
// crud.getAll();