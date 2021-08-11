import React from "react";
import { Formik, Form, FieldArray } from "formik";
//import Recipe from "./Recipes.js";
import SearchBar from "./SearchBar.js";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormHelperText from "@material-ui/core/FormHelperText";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",
    color: "#546e7a",
    justifyContent: "left",
    padding: "10px 5px",
    fontWeight: "bold"
  },
  content: {
    padding: 0
  },
  status: {
    marginRight: "5px"
  },
  actions: {
    justifyContent: "flex-end"
  },
  summaryTable: {
    width: "auto",
    marginBottom: "10px",
    pointerEvents: "none"
  },
  noBorder: {
    border: "none"
  },
  denseCell: {
    padding: "5px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const validationSchema = yup.object().shape({
  data: yup.array().of(
    yup.object().shape({
      code: yup.object().typeError("Please select a food"),
      additionalPrice: yup.string().required("Please enter quantity")
    })
  )
});

const codes = [
  { id: 1, name: "Code 1", desc: "Desc 1", price: 100 },
  { id: 2, name: "Code 2", desc: "Desc 2", price: 200 },
  { id: 3, name: "Code 3", desc: "Desc 3", price: 300 }
];





const initialValues = {
  data: [
    {
      code: null,
      additionalPrice: 0
    }
  ]
};

const Reports = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row">
        <Grid item lg={12} md={12} xs={12}>
          <Card>
            <CardHeader
              className={classes.header}
         
              classes={{
                title: classes.header
              }}
            />
            <Divider />
            <CardContent>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log(values.data);
                }}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  handleChange,
                  setFieldValue,
                  errors,
                  handleBlur,
                  touched
                }) => {
                  return (
                    <Form>
                      <FieldArray name="data">
                        {({ insert, remove, push }) => (
                          <Paper>
                            <TableContainer>
                              <Table stickyHeader>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Food</TableCell>
                           
                                    <TableCell>Kcal</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Actions</TableCell>
                                  
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {values.data.map((record, idx) => {
                                    return (
                                      <TableRow key={idx} hover>
                                        <TableCell>
           
                                        </TableCell>
                                        
                                       
                                        <TableCell>
                                          {values.data[idx] &&
                                          values.data[idx].code
                                            ? values.data[idx].code.price
                                            : 0}
                                        </TableCell>
                                        <TableCell>
                                          <TextField
                                            label="Quantity"
                                            type="number"
                                            variant="outlined"
                                            placeholder="0"
                                            name={`data.${idx}.additionalPrice`}
                                            value={
                                              values.data[idx] &&
                                              values.data[idx].additionalPrice
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                              touched.data &&
                                                touched.data[idx] &&
                                                touched.data[idx]
                                                  .additionalPrice &&
                                                errors.data &&
                                                errors.data[idx] &&
                                                errors.data[idx].additionalPrice
                                            )}
                                            helperText={
                                              touched.data &&
                                              touched.data[idx] &&
                                              touched.data[idx]
                                                .additionalPrice &&
                                              errors.data &&
                                              errors.data[idx] &&
                                              errors.data[idx].additionalPrice
                                                ? errors.data[idx]
                                                    .additionalPrice
                                                : ""
                                            }
                                          />
                                        </TableCell>
                                        <TableCell>
                                          <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                              remove(idx);
                                            }}
                                          >
                                            Remove
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                  <TableRow>
                                    <TableCell>Total</TableCell>
                                    
                                
                                    
                                    <TableCell>
                                      {values.data.reduce((total, curVal) => {
                                        if (!curVal.code) {
                                          return total;
                                        }
                                     
                                        return (
                                          total +
                                          curVal.code.price *
                                          (curVal.additionalPrice || 0)
                                        );
                                      }, 0)}
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <Box display="flex" >
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                  push({
                                    code: null,
                                    additionalPrice: 0
                                  })
                                }
                              >
                                Add Row
                              </Button>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                  
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>

                              <Button
                                
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                Save
                              </Button>
                            </Box>
                    
                          </Paper>
                        )}
                      </FieldArray>
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
